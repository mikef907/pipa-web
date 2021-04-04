import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};


export type EventInput = {
  id?: Maybe<Scalars['Float']>;
  parentId?: Maybe<Scalars['Float']>;
  name: Scalars['String'];
  description: Scalars['String'];
  allDay?: Maybe<Scalars['Boolean']>;
  start: Scalars['DateTime'];
  end?: Maybe<Scalars['DateTime']>;
};

export type EventQuery = {
  __typename?: 'EventQuery';
  id: Scalars['ID'];
  parentId?: Maybe<Scalars['Float']>;
  name: Scalars['String'];
  description: Scalars['String'];
  allDay?: Maybe<Scalars['Boolean']>;
  start: Scalars['DateTime'];
  end?: Maybe<Scalars['DateTime']>;
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
};

export type Mutation = {
  __typename?: 'Mutation';
  resetPassword: Scalars['Boolean'];
  forgotPassword: Scalars['Boolean'];
  addUser: Scalars['String'];
  updateUser: Scalars['String'];
  login: Scalars['String'];
  addEvent: EventQuery;
  updateEvent: EventQuery;
  addStaff: Scalars['Float'];
  updateStaff: Scalars['Boolean'];
  removeStaff: Scalars['Boolean'];
  uploadAvatar: Scalars['Boolean'];
  addPost: Scalars['Float'];
  updatePost: Scalars['Boolean'];
  removePost: Scalars['Boolean'];
};


export type MutationResetPasswordArgs = {
  input: UserResetPassword;
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationAddUserArgs = {
  newUser: NewUserInput;
};


export type MutationUpdateUserArgs = {
  data: UserInput;
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationAddEventArgs = {
  event: EventInput;
};


export type MutationUpdateEventArgs = {
  event: EventInput;
};


export type MutationAddStaffArgs = {
  staff: NewStaffInput;
};


export type MutationUpdateStaffArgs = {
  staff: StaffInput;
};


export type MutationRemoveStaffArgs = {
  id: Scalars['Float'];
};


export type MutationUploadAvatarArgs = {
  userId: Scalars['Float'];
  file: Scalars['Upload'];
};


export type MutationAddPostArgs = {
  post: PostInput;
};


export type MutationUpdatePostArgs = {
  post: PostInput;
};


export type MutationRemovePostArgs = {
  id: Scalars['Float'];
};

export type NewStaffInput = {
  userId: Scalars['Float'];
  start: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  user: UserInput;
};

export type NewUserInput = {
  first_name: Scalars['String'];
  last_name: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type PostInput = {
  id?: Maybe<Scalars['Float']>;
  authorId?: Maybe<Scalars['Float']>;
  published?: Maybe<Scalars['DateTime']>;
  headline: Scalars['String'];
  imgUrl?: Maybe<Scalars['String']>;
  content: Scalars['String'];
};

export type PostQuery = {
  __typename?: 'PostQuery';
  id: Scalars['ID'];
  authorId: Scalars['Float'];
  author?: Maybe<StaffQuery>;
  published?: Maybe<Scalars['DateTime']>;
  headline: Scalars['String'];
  imgUrl?: Maybe<Scalars['String']>;
  content: Scalars['String'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
};

export type Query = {
  __typename?: 'Query';
  users: Array<UserQuery>;
  user: UserQuery;
  events: Array<EventQuery>;
  event: EventQuery;
  allStaff: Array<StaffQuery>;
  staff: StaffQuery;
  allPosts: Array<PostQuery>;
  post: PostQuery;
};


export type QueryUsersArgs = {
  inRoles?: Maybe<Array<Scalars['String']>>;
  notInRoles?: Maybe<Array<Scalars['String']>>;
};


export type QueryUserArgs = {
  id: Scalars['Float'];
};


export type QueryEventArgs = {
  id: Scalars['Float'];
};


export type QueryStaffArgs = {
  id: Scalars['Float'];
};


export type QueryPostArgs = {
  id: Scalars['Float'];
};

export type RoleQuery = {
  __typename?: 'RoleQuery';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type StaffInput = {
  id: Scalars['ID'];
  userId: Scalars['Float'];
  start?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  user: UserInput;
};

export type StaffQuery = {
  __typename?: 'StaffQuery';
  id: Scalars['ID'];
  userId: Scalars['Float'];
  start: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  img?: Maybe<Scalars['String']>;
  user: UserQuery;
};


export type UserInput = {
  first_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};

export type UserQuery = {
  __typename?: 'UserQuery';
  id: Scalars['ID'];
  first_name: Scalars['String'];
  last_name: Scalars['String'];
  email: Scalars['String'];
  roles: Array<RoleQuery>;
};

export type UserResetPassword = {
  nonce: Scalars['String'];
  password: Scalars['String'];
};

export type AddEventMutationVariables = Exact<{
  event: EventInput;
}>;


export type AddEventMutation = (
  { __typename?: 'Mutation' }
  & { addEvent: (
    { __typename?: 'EventQuery' }
    & Pick<EventQuery, 'id' | 'parentId' | 'name' | 'description' | 'allDay' | 'start' | 'end'>
  ) }
);

export type UpdateEventMutationVariables = Exact<{
  event: EventInput;
}>;


export type UpdateEventMutation = (
  { __typename?: 'Mutation' }
  & { updateEvent: (
    { __typename?: 'EventQuery' }
    & Pick<EventQuery, 'id' | 'parentId' | 'name' | 'description' | 'allDay' | 'start' | 'end'>
  ) }
);

export type AddPostMutationVariables = Exact<{
  post: PostInput;
}>;


export type AddPostMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'addPost'>
);

export type UpdatePostMutationVariables = Exact<{
  post: PostInput;
}>;


export type UpdatePostMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'updatePost'>
);

export type RemovePostMutationVariables = Exact<{
  id: Scalars['Float'];
}>;


export type RemovePostMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'removePost'>
);

export type UpdateStaffMutationVariables = Exact<{
  staff: StaffInput;
}>;


export type UpdateStaffMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'updateStaff'>
);

export type UploadAvatarMutationVariables = Exact<{
  file: Scalars['Upload'];
  userId: Scalars['Float'];
}>;


export type UploadAvatarMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'uploadAvatar'>
);

export type AddStaffMutationVariables = Exact<{
  staff: NewStaffInput;
}>;


export type AddStaffMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'addStaff'>
);

export type RemoveStaffMutationVariables = Exact<{
  id: Scalars['Float'];
}>;


export type RemoveStaffMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'removeStaff'>
);

export type ResetPasswordMutationVariables = Exact<{
  input: UserResetPassword;
}>;


export type ResetPasswordMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'resetPassword'>
);

export type ForgotPasswordMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type ForgotPasswordMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'forgotPassword'>
);

export type AddUserMutationVariables = Exact<{
  newUser: NewUserInput;
}>;


export type AddUserMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'addUser'>
);

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'login'>
);

export type EventsQueryVariables = Exact<{ [key: string]: never; }>;


export type EventsQuery = (
  { __typename?: 'Query' }
  & { events: Array<(
    { __typename?: 'EventQuery' }
    & Pick<EventQuery, 'id' | 'parentId' | 'name' | 'description' | 'start' | 'end' | 'allDay'>
  )> }
);

export type EventByIdQueryVariables = Exact<{
  id: Scalars['Float'];
}>;


export type EventByIdQuery = (
  { __typename?: 'Query' }
  & { event: (
    { __typename?: 'EventQuery' }
    & Pick<EventQuery, 'id' | 'parentId' | 'name' | 'description' | 'start' | 'end' | 'allDay'>
  ) }
);

export type AllPostsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllPostsQuery = (
  { __typename?: 'Query' }
  & { allPosts: Array<(
    { __typename?: 'PostQuery' }
    & Pick<PostQuery, 'id' | 'authorId' | 'headline' | 'published' | 'created_at' | 'updated_at'>
    & { author?: Maybe<(
      { __typename?: 'StaffQuery' }
      & Pick<StaffQuery, 'img'>
      & { user: (
        { __typename?: 'UserQuery' }
        & Pick<UserQuery, 'email' | 'first_name' | 'last_name'>
      ) }
    )> }
  )> }
);

export type PostByIdQueryVariables = Exact<{
  id: Scalars['Float'];
}>;


export type PostByIdQuery = (
  { __typename?: 'Query' }
  & { post: (
    { __typename?: 'PostQuery' }
    & Pick<PostQuery, 'id' | 'authorId' | 'headline' | 'content' | 'published' | 'created_at' | 'updated_at'>
    & { author?: Maybe<(
      { __typename?: 'StaffQuery' }
      & Pick<StaffQuery, 'img'>
      & { user: (
        { __typename?: 'UserQuery' }
        & Pick<UserQuery, 'email' | 'first_name' | 'last_name'>
      ) }
    )> }
  ) }
);

export type AllStaffQueryVariables = Exact<{ [key: string]: never; }>;


export type AllStaffQuery = (
  { __typename?: 'Query' }
  & { allStaff: Array<(
    { __typename?: 'StaffQuery' }
    & Pick<StaffQuery, 'id' | 'start' | 'description' | 'img'>
    & { user: (
      { __typename?: 'UserQuery' }
      & Pick<UserQuery, 'id' | 'first_name' | 'last_name' | 'email'>
    ) }
  )> }
);

export type StaffByIdQueryVariables = Exact<{
  id: Scalars['Float'];
}>;


export type StaffByIdQuery = (
  { __typename?: 'Query' }
  & { staff: (
    { __typename?: 'StaffQuery' }
    & Pick<StaffQuery, 'id' | 'userId' | 'start' | 'description' | 'img'>
    & { user: (
      { __typename?: 'UserQuery' }
      & Pick<UserQuery, 'id' | 'first_name' | 'last_name' | 'email'>
    ) }
  ) }
);

export type UserListQueryVariables = Exact<{
  inRoles?: Maybe<Array<Scalars['String']> | Scalars['String']>;
  notInRoles?: Maybe<Array<Scalars['String']> | Scalars['String']>;
}>;


export type UserListQuery = (
  { __typename?: 'Query' }
  & { users: Array<(
    { __typename?: 'UserQuery' }
    & Pick<UserQuery, 'id' | 'first_name' | 'last_name' | 'email'>
    & { roles: Array<(
      { __typename?: 'RoleQuery' }
      & Pick<RoleQuery, 'id' | 'name'>
    )> }
  )> }
);

export type UserByIdQueryVariables = Exact<{
  id: Scalars['Float'];
}>;


export type UserByIdQuery = (
  { __typename?: 'Query' }
  & { user: (
    { __typename?: 'UserQuery' }
    & Pick<UserQuery, 'id' | 'first_name' | 'last_name' | 'email'>
  ) }
);


export const AddEventDocument = gql`
    mutation AddEvent($event: EventInput!) {
  addEvent(event: $event) {
    id
    parentId
    name
    description
    allDay
    start
    end
  }
}
    `;
export type AddEventMutationFn = Apollo.MutationFunction<AddEventMutation, AddEventMutationVariables>;

/**
 * __useAddEventMutation__
 *
 * To run a mutation, you first call `useAddEventMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddEventMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addEventMutation, { data, loading, error }] = useAddEventMutation({
 *   variables: {
 *      event: // value for 'event'
 *   },
 * });
 */
export function useAddEventMutation(baseOptions?: Apollo.MutationHookOptions<AddEventMutation, AddEventMutationVariables>) {
        return Apollo.useMutation<AddEventMutation, AddEventMutationVariables>(AddEventDocument, baseOptions);
      }
export type AddEventMutationHookResult = ReturnType<typeof useAddEventMutation>;
export type AddEventMutationResult = Apollo.MutationResult<AddEventMutation>;
export type AddEventMutationOptions = Apollo.BaseMutationOptions<AddEventMutation, AddEventMutationVariables>;
export const UpdateEventDocument = gql`
    mutation UpdateEvent($event: EventInput!) {
  updateEvent(event: $event) {
    id
    parentId
    name
    description
    allDay
    start
    end
  }
}
    `;
export type UpdateEventMutationFn = Apollo.MutationFunction<UpdateEventMutation, UpdateEventMutationVariables>;

/**
 * __useUpdateEventMutation__
 *
 * To run a mutation, you first call `useUpdateEventMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateEventMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateEventMutation, { data, loading, error }] = useUpdateEventMutation({
 *   variables: {
 *      event: // value for 'event'
 *   },
 * });
 */
export function useUpdateEventMutation(baseOptions?: Apollo.MutationHookOptions<UpdateEventMutation, UpdateEventMutationVariables>) {
        return Apollo.useMutation<UpdateEventMutation, UpdateEventMutationVariables>(UpdateEventDocument, baseOptions);
      }
export type UpdateEventMutationHookResult = ReturnType<typeof useUpdateEventMutation>;
export type UpdateEventMutationResult = Apollo.MutationResult<UpdateEventMutation>;
export type UpdateEventMutationOptions = Apollo.BaseMutationOptions<UpdateEventMutation, UpdateEventMutationVariables>;
export const AddPostDocument = gql`
    mutation AddPost($post: PostInput!) {
  addPost(post: $post)
}
    `;
export type AddPostMutationFn = Apollo.MutationFunction<AddPostMutation, AddPostMutationVariables>;

/**
 * __useAddPostMutation__
 *
 * To run a mutation, you first call `useAddPostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddPostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addPostMutation, { data, loading, error }] = useAddPostMutation({
 *   variables: {
 *      post: // value for 'post'
 *   },
 * });
 */
export function useAddPostMutation(baseOptions?: Apollo.MutationHookOptions<AddPostMutation, AddPostMutationVariables>) {
        return Apollo.useMutation<AddPostMutation, AddPostMutationVariables>(AddPostDocument, baseOptions);
      }
export type AddPostMutationHookResult = ReturnType<typeof useAddPostMutation>;
export type AddPostMutationResult = Apollo.MutationResult<AddPostMutation>;
export type AddPostMutationOptions = Apollo.BaseMutationOptions<AddPostMutation, AddPostMutationVariables>;
export const UpdatePostDocument = gql`
    mutation UpdatePost($post: PostInput!) {
  updatePost(post: $post)
}
    `;
export type UpdatePostMutationFn = Apollo.MutationFunction<UpdatePostMutation, UpdatePostMutationVariables>;

/**
 * __useUpdatePostMutation__
 *
 * To run a mutation, you first call `useUpdatePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePostMutation, { data, loading, error }] = useUpdatePostMutation({
 *   variables: {
 *      post: // value for 'post'
 *   },
 * });
 */
export function useUpdatePostMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePostMutation, UpdatePostMutationVariables>) {
        return Apollo.useMutation<UpdatePostMutation, UpdatePostMutationVariables>(UpdatePostDocument, baseOptions);
      }
export type UpdatePostMutationHookResult = ReturnType<typeof useUpdatePostMutation>;
export type UpdatePostMutationResult = Apollo.MutationResult<UpdatePostMutation>;
export type UpdatePostMutationOptions = Apollo.BaseMutationOptions<UpdatePostMutation, UpdatePostMutationVariables>;
export const RemovePostDocument = gql`
    mutation RemovePost($id: Float!) {
  removePost(id: $id)
}
    `;
export type RemovePostMutationFn = Apollo.MutationFunction<RemovePostMutation, RemovePostMutationVariables>;

/**
 * __useRemovePostMutation__
 *
 * To run a mutation, you first call `useRemovePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemovePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removePostMutation, { data, loading, error }] = useRemovePostMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemovePostMutation(baseOptions?: Apollo.MutationHookOptions<RemovePostMutation, RemovePostMutationVariables>) {
        return Apollo.useMutation<RemovePostMutation, RemovePostMutationVariables>(RemovePostDocument, baseOptions);
      }
export type RemovePostMutationHookResult = ReturnType<typeof useRemovePostMutation>;
export type RemovePostMutationResult = Apollo.MutationResult<RemovePostMutation>;
export type RemovePostMutationOptions = Apollo.BaseMutationOptions<RemovePostMutation, RemovePostMutationVariables>;
export const UpdateStaffDocument = gql`
    mutation UpdateStaff($staff: StaffInput!) {
  updateStaff(staff: $staff)
}
    `;
export type UpdateStaffMutationFn = Apollo.MutationFunction<UpdateStaffMutation, UpdateStaffMutationVariables>;

/**
 * __useUpdateStaffMutation__
 *
 * To run a mutation, you first call `useUpdateStaffMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateStaffMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateStaffMutation, { data, loading, error }] = useUpdateStaffMutation({
 *   variables: {
 *      staff: // value for 'staff'
 *   },
 * });
 */
export function useUpdateStaffMutation(baseOptions?: Apollo.MutationHookOptions<UpdateStaffMutation, UpdateStaffMutationVariables>) {
        return Apollo.useMutation<UpdateStaffMutation, UpdateStaffMutationVariables>(UpdateStaffDocument, baseOptions);
      }
export type UpdateStaffMutationHookResult = ReturnType<typeof useUpdateStaffMutation>;
export type UpdateStaffMutationResult = Apollo.MutationResult<UpdateStaffMutation>;
export type UpdateStaffMutationOptions = Apollo.BaseMutationOptions<UpdateStaffMutation, UpdateStaffMutationVariables>;
export const UploadAvatarDocument = gql`
    mutation UploadAvatar($file: Upload!, $userId: Float!) {
  uploadAvatar(file: $file, userId: $userId)
}
    `;
export type UploadAvatarMutationFn = Apollo.MutationFunction<UploadAvatarMutation, UploadAvatarMutationVariables>;

/**
 * __useUploadAvatarMutation__
 *
 * To run a mutation, you first call `useUploadAvatarMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUploadAvatarMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [uploadAvatarMutation, { data, loading, error }] = useUploadAvatarMutation({
 *   variables: {
 *      file: // value for 'file'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useUploadAvatarMutation(baseOptions?: Apollo.MutationHookOptions<UploadAvatarMutation, UploadAvatarMutationVariables>) {
        return Apollo.useMutation<UploadAvatarMutation, UploadAvatarMutationVariables>(UploadAvatarDocument, baseOptions);
      }
export type UploadAvatarMutationHookResult = ReturnType<typeof useUploadAvatarMutation>;
export type UploadAvatarMutationResult = Apollo.MutationResult<UploadAvatarMutation>;
export type UploadAvatarMutationOptions = Apollo.BaseMutationOptions<UploadAvatarMutation, UploadAvatarMutationVariables>;
export const AddStaffDocument = gql`
    mutation AddStaff($staff: NewStaffInput!) {
  addStaff(staff: $staff)
}
    `;
export type AddStaffMutationFn = Apollo.MutationFunction<AddStaffMutation, AddStaffMutationVariables>;

/**
 * __useAddStaffMutation__
 *
 * To run a mutation, you first call `useAddStaffMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddStaffMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addStaffMutation, { data, loading, error }] = useAddStaffMutation({
 *   variables: {
 *      staff: // value for 'staff'
 *   },
 * });
 */
export function useAddStaffMutation(baseOptions?: Apollo.MutationHookOptions<AddStaffMutation, AddStaffMutationVariables>) {
        return Apollo.useMutation<AddStaffMutation, AddStaffMutationVariables>(AddStaffDocument, baseOptions);
      }
export type AddStaffMutationHookResult = ReturnType<typeof useAddStaffMutation>;
export type AddStaffMutationResult = Apollo.MutationResult<AddStaffMutation>;
export type AddStaffMutationOptions = Apollo.BaseMutationOptions<AddStaffMutation, AddStaffMutationVariables>;
export const RemoveStaffDocument = gql`
    mutation RemoveStaff($id: Float!) {
  removeStaff(id: $id)
}
    `;
export type RemoveStaffMutationFn = Apollo.MutationFunction<RemoveStaffMutation, RemoveStaffMutationVariables>;

/**
 * __useRemoveStaffMutation__
 *
 * To run a mutation, you first call `useRemoveStaffMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveStaffMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeStaffMutation, { data, loading, error }] = useRemoveStaffMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemoveStaffMutation(baseOptions?: Apollo.MutationHookOptions<RemoveStaffMutation, RemoveStaffMutationVariables>) {
        return Apollo.useMutation<RemoveStaffMutation, RemoveStaffMutationVariables>(RemoveStaffDocument, baseOptions);
      }
export type RemoveStaffMutationHookResult = ReturnType<typeof useRemoveStaffMutation>;
export type RemoveStaffMutationResult = Apollo.MutationResult<RemoveStaffMutation>;
export type RemoveStaffMutationOptions = Apollo.BaseMutationOptions<RemoveStaffMutation, RemoveStaffMutationVariables>;
export const ResetPasswordDocument = gql`
    mutation ResetPassword($input: UserResetPassword!) {
  resetPassword(input: $input)
}
    `;
export type ResetPasswordMutationFn = Apollo.MutationFunction<ResetPasswordMutation, ResetPasswordMutationVariables>;

/**
 * __useResetPasswordMutation__
 *
 * To run a mutation, you first call `useResetPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResetPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resetPasswordMutation, { data, loading, error }] = useResetPasswordMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useResetPasswordMutation(baseOptions?: Apollo.MutationHookOptions<ResetPasswordMutation, ResetPasswordMutationVariables>) {
        return Apollo.useMutation<ResetPasswordMutation, ResetPasswordMutationVariables>(ResetPasswordDocument, baseOptions);
      }
export type ResetPasswordMutationHookResult = ReturnType<typeof useResetPasswordMutation>;
export type ResetPasswordMutationResult = Apollo.MutationResult<ResetPasswordMutation>;
export type ResetPasswordMutationOptions = Apollo.BaseMutationOptions<ResetPasswordMutation, ResetPasswordMutationVariables>;
export const ForgotPasswordDocument = gql`
    mutation ForgotPassword($email: String!) {
  forgotPassword(email: $email)
}
    `;
export type ForgotPasswordMutationFn = Apollo.MutationFunction<ForgotPasswordMutation, ForgotPasswordMutationVariables>;

/**
 * __useForgotPasswordMutation__
 *
 * To run a mutation, you first call `useForgotPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useForgotPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [forgotPasswordMutation, { data, loading, error }] = useForgotPasswordMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useForgotPasswordMutation(baseOptions?: Apollo.MutationHookOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>) {
        return Apollo.useMutation<ForgotPasswordMutation, ForgotPasswordMutationVariables>(ForgotPasswordDocument, baseOptions);
      }
export type ForgotPasswordMutationHookResult = ReturnType<typeof useForgotPasswordMutation>;
export type ForgotPasswordMutationResult = Apollo.MutationResult<ForgotPasswordMutation>;
export type ForgotPasswordMutationOptions = Apollo.BaseMutationOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>;
export const AddUserDocument = gql`
    mutation AddUser($newUser: NewUserInput!) {
  addUser(newUser: $newUser)
}
    `;
export type AddUserMutationFn = Apollo.MutationFunction<AddUserMutation, AddUserMutationVariables>;

/**
 * __useAddUserMutation__
 *
 * To run a mutation, you first call `useAddUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addUserMutation, { data, loading, error }] = useAddUserMutation({
 *   variables: {
 *      newUser: // value for 'newUser'
 *   },
 * });
 */
export function useAddUserMutation(baseOptions?: Apollo.MutationHookOptions<AddUserMutation, AddUserMutationVariables>) {
        return Apollo.useMutation<AddUserMutation, AddUserMutationVariables>(AddUserDocument, baseOptions);
      }
export type AddUserMutationHookResult = ReturnType<typeof useAddUserMutation>;
export type AddUserMutationResult = Apollo.MutationResult<AddUserMutation>;
export type AddUserMutationOptions = Apollo.BaseMutationOptions<AddUserMutation, AddUserMutationVariables>;
export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password)
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const EventsDocument = gql`
    query Events {
  events {
    id
    parentId
    name
    description
    start
    end
    allDay
  }
}
    `;

/**
 * __useEventsQuery__
 *
 * To run a query within a React component, call `useEventsQuery` and pass it any options that fit your needs.
 * When your component renders, `useEventsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEventsQuery({
 *   variables: {
 *   },
 * });
 */
export function useEventsQuery(baseOptions?: Apollo.QueryHookOptions<EventsQuery, EventsQueryVariables>) {
        return Apollo.useQuery<EventsQuery, EventsQueryVariables>(EventsDocument, baseOptions);
      }
export function useEventsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EventsQuery, EventsQueryVariables>) {
          return Apollo.useLazyQuery<EventsQuery, EventsQueryVariables>(EventsDocument, baseOptions);
        }
export type EventsQueryHookResult = ReturnType<typeof useEventsQuery>;
export type EventsLazyQueryHookResult = ReturnType<typeof useEventsLazyQuery>;
export type EventsQueryResult = Apollo.QueryResult<EventsQuery, EventsQueryVariables>;
export const EventByIdDocument = gql`
    query EventById($id: Float!) {
  event(id: $id) {
    id
    parentId
    name
    description
    start
    end
    allDay
  }
}
    `;

/**
 * __useEventByIdQuery__
 *
 * To run a query within a React component, call `useEventByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useEventByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEventByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useEventByIdQuery(baseOptions: Apollo.QueryHookOptions<EventByIdQuery, EventByIdQueryVariables>) {
        return Apollo.useQuery<EventByIdQuery, EventByIdQueryVariables>(EventByIdDocument, baseOptions);
      }
export function useEventByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EventByIdQuery, EventByIdQueryVariables>) {
          return Apollo.useLazyQuery<EventByIdQuery, EventByIdQueryVariables>(EventByIdDocument, baseOptions);
        }
export type EventByIdQueryHookResult = ReturnType<typeof useEventByIdQuery>;
export type EventByIdLazyQueryHookResult = ReturnType<typeof useEventByIdLazyQuery>;
export type EventByIdQueryResult = Apollo.QueryResult<EventByIdQuery, EventByIdQueryVariables>;
export const AllPostsDocument = gql`
    query AllPosts {
  allPosts {
    id
    authorId
    author {
      user {
        email
        first_name
        last_name
      }
      img
    }
    headline
    published
    created_at
    updated_at
  }
}
    `;

/**
 * __useAllPostsQuery__
 *
 * To run a query within a React component, call `useAllPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllPostsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllPostsQuery(baseOptions?: Apollo.QueryHookOptions<AllPostsQuery, AllPostsQueryVariables>) {
        return Apollo.useQuery<AllPostsQuery, AllPostsQueryVariables>(AllPostsDocument, baseOptions);
      }
export function useAllPostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllPostsQuery, AllPostsQueryVariables>) {
          return Apollo.useLazyQuery<AllPostsQuery, AllPostsQueryVariables>(AllPostsDocument, baseOptions);
        }
export type AllPostsQueryHookResult = ReturnType<typeof useAllPostsQuery>;
export type AllPostsLazyQueryHookResult = ReturnType<typeof useAllPostsLazyQuery>;
export type AllPostsQueryResult = Apollo.QueryResult<AllPostsQuery, AllPostsQueryVariables>;
export const PostByIdDocument = gql`
    query PostById($id: Float!) {
  post(id: $id) {
    id
    authorId
    author {
      user {
        email
        first_name
        last_name
      }
      img
    }
    headline
    content
    published
    created_at
    updated_at
  }
}
    `;

/**
 * __usePostByIdQuery__
 *
 * To run a query within a React component, call `usePostByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function usePostByIdQuery(baseOptions: Apollo.QueryHookOptions<PostByIdQuery, PostByIdQueryVariables>) {
        return Apollo.useQuery<PostByIdQuery, PostByIdQueryVariables>(PostByIdDocument, baseOptions);
      }
export function usePostByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PostByIdQuery, PostByIdQueryVariables>) {
          return Apollo.useLazyQuery<PostByIdQuery, PostByIdQueryVariables>(PostByIdDocument, baseOptions);
        }
export type PostByIdQueryHookResult = ReturnType<typeof usePostByIdQuery>;
export type PostByIdLazyQueryHookResult = ReturnType<typeof usePostByIdLazyQuery>;
export type PostByIdQueryResult = Apollo.QueryResult<PostByIdQuery, PostByIdQueryVariables>;
export const AllStaffDocument = gql`
    query AllStaff {
  allStaff {
    id
    start
    description
    img
    user {
      id
      first_name
      last_name
      email
    }
  }
}
    `;

/**
 * __useAllStaffQuery__
 *
 * To run a query within a React component, call `useAllStaffQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllStaffQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllStaffQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllStaffQuery(baseOptions?: Apollo.QueryHookOptions<AllStaffQuery, AllStaffQueryVariables>) {
        return Apollo.useQuery<AllStaffQuery, AllStaffQueryVariables>(AllStaffDocument, baseOptions);
      }
export function useAllStaffLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllStaffQuery, AllStaffQueryVariables>) {
          return Apollo.useLazyQuery<AllStaffQuery, AllStaffQueryVariables>(AllStaffDocument, baseOptions);
        }
export type AllStaffQueryHookResult = ReturnType<typeof useAllStaffQuery>;
export type AllStaffLazyQueryHookResult = ReturnType<typeof useAllStaffLazyQuery>;
export type AllStaffQueryResult = Apollo.QueryResult<AllStaffQuery, AllStaffQueryVariables>;
export const StaffByIdDocument = gql`
    query StaffById($id: Float!) {
  staff(id: $id) {
    id
    userId
    start
    description
    img
    user {
      id
      first_name
      last_name
      email
    }
  }
}
    `;

/**
 * __useStaffByIdQuery__
 *
 * To run a query within a React component, call `useStaffByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useStaffByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStaffByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useStaffByIdQuery(baseOptions: Apollo.QueryHookOptions<StaffByIdQuery, StaffByIdQueryVariables>) {
        return Apollo.useQuery<StaffByIdQuery, StaffByIdQueryVariables>(StaffByIdDocument, baseOptions);
      }
export function useStaffByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<StaffByIdQuery, StaffByIdQueryVariables>) {
          return Apollo.useLazyQuery<StaffByIdQuery, StaffByIdQueryVariables>(StaffByIdDocument, baseOptions);
        }
export type StaffByIdQueryHookResult = ReturnType<typeof useStaffByIdQuery>;
export type StaffByIdLazyQueryHookResult = ReturnType<typeof useStaffByIdLazyQuery>;
export type StaffByIdQueryResult = Apollo.QueryResult<StaffByIdQuery, StaffByIdQueryVariables>;
export const UserListDocument = gql`
    query UserList($inRoles: [String!] = [], $notInRoles: [String!] = []) {
  users(inRoles: $inRoles, notInRoles: $notInRoles) {
    id
    first_name
    last_name
    email
    roles {
      id
      name
    }
  }
}
    `;

/**
 * __useUserListQuery__
 *
 * To run a query within a React component, call `useUserListQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserListQuery({
 *   variables: {
 *      inRoles: // value for 'inRoles'
 *      notInRoles: // value for 'notInRoles'
 *   },
 * });
 */
export function useUserListQuery(baseOptions?: Apollo.QueryHookOptions<UserListQuery, UserListQueryVariables>) {
        return Apollo.useQuery<UserListQuery, UserListQueryVariables>(UserListDocument, baseOptions);
      }
export function useUserListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserListQuery, UserListQueryVariables>) {
          return Apollo.useLazyQuery<UserListQuery, UserListQueryVariables>(UserListDocument, baseOptions);
        }
export type UserListQueryHookResult = ReturnType<typeof useUserListQuery>;
export type UserListLazyQueryHookResult = ReturnType<typeof useUserListLazyQuery>;
export type UserListQueryResult = Apollo.QueryResult<UserListQuery, UserListQueryVariables>;
export const UserByIdDocument = gql`
    query UserById($id: Float!) {
  user(id: $id) {
    id
    first_name
    last_name
    email
  }
}
    `;

/**
 * __useUserByIdQuery__
 *
 * To run a query within a React component, call `useUserByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUserByIdQuery(baseOptions: Apollo.QueryHookOptions<UserByIdQuery, UserByIdQueryVariables>) {
        return Apollo.useQuery<UserByIdQuery, UserByIdQueryVariables>(UserByIdDocument, baseOptions);
      }
export function useUserByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserByIdQuery, UserByIdQueryVariables>) {
          return Apollo.useLazyQuery<UserByIdQuery, UserByIdQueryVariables>(UserByIdDocument, baseOptions);
        }
export type UserByIdQueryHookResult = ReturnType<typeof useUserByIdQuery>;
export type UserByIdLazyQueryHookResult = ReturnType<typeof useUserByIdLazyQuery>;
export type UserByIdQueryResult = Apollo.QueryResult<UserByIdQuery, UserByIdQueryVariables>;