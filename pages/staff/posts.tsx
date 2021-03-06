import {
  CircularProgress,
  Divider,
  IconButton,
  Link as MatLink,
  Typography,
} from '@material-ui/core';
import React, { useContext, useEffect } from 'react';
import Layout from '../../components/Layout';
import Protect from '../../components/Protect';
import { DataGrid, GridCellParams, GridColDef } from '@material-ui/data-grid';
import {
  useAllPostsQuery,
  useRemovePostMutation,
} from '../../generated/graphql';
import Link from '../../components/Link';
import { UserContext } from '../../context/UserContext';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import ErrorDisplay from '../../components/ErrorDisplay';

const Events: React.FC = () => {
  const { user, checkRoles } = useContext(UserContext);

  const columns: GridColDef[] = [
    { field: 'headline', headerName: 'Headline', width: 160 },
    {
      field: 'first_name',
      headerName: 'First Name',
      width: 160,
      valueFormatter: (p) => p.row.author.user.first_name,
    },
    {
      field: 'last_name',
      headerName: 'Last Name',
      width: 160,
      valueFormatter: (p) => p.row.author.user.last_name,
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 200,
      valueFormatter: (p) => p.row.author.user.email,
    },
    {
      field: 'published',
      headerName: 'Published',
      width: 160,
    },
    {
      field: 'id',
      headerName: 'Action',
      width: 130,
      renderCell: (params: GridCellParams) => {
        const link = `/staff/post/${params.value}`;
        return (
          <>
            <Link as={link} href="/staff/post/[[...id]]">
              <IconButton>
                <EditIcon fontSize="small"></EditIcon>
              </IconButton>
            </Link>
            <IconButton
              onClick={() => {
                if (confirm('Remove post? (This is not undoable)')) {
                  removePost({ variables: { id: params.value as number } });
                }
              }}
            >
              <DeleteIcon fontSize="small"></DeleteIcon>
              {removeLoading && (
                <CircularProgress color="secondary" size={20} />
              )}
            </IconButton>
          </>
        );
      },
    },
  ];

  const { data, error, loading } = useAllPostsQuery();

  const [removePost, { error: removeError, loading: removeLoading }] =
    useRemovePostMutation({
      refetchQueries: ['AllPosts'],
    });

  return (
    <Layout>
      <Typography
        variant="h4"
        component="h1"
        style={{ textAlign: 'center' }}
        gutterBottom
      >
        Blog Posts
      </Typography>
      <Protect roles={['Staff']}>
        {checkRoles(user, 'Staff') && (
          <Link as={`/staff/post`} href="/staff/post/[[...id]]">
            Add Post
          </Link>
        )}
        <ErrorDisplay error={error || removeError}></ErrorDisplay>
        {loading && <CircularProgress></CircularProgress>}
        {data && (
          <DataGrid
            columns={columns}
            rows={data.allPosts}
            autoHeight={true}
            autoPageSize={true}
          ></DataGrid>
        )}
      </Protect>
    </Layout>
  );
};

export default Events;
