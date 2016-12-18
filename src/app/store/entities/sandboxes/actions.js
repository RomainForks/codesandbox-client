// @flow
import type { Schema } from 'normalizr';

import createEntityActions, { getEntity } from '../../actions/entities';
import notificationActions from '../../actions/notifications';
import { singleSandboxSelector } from './selector';

export const GET_SANDBOX_BY_USERNAME_AND_SLUG = 'GET_SANDBOX_BY_USERNAME_AND_SLUG';
export const GET_SANDBOX_BY_USERNAME_AND_SLUG_SUCCESS = 'GET_SANDBOX_BY_USERNAME_AND_SLUG_SUCCESS';
export const GET_SANDBOX_BY_USERNAME_AND_SLUG_FAILURE = 'GET_SANDBOX_BY_USERNAME_AND_SLUG_FAILURE';

export default (schema: Schema) => {
  const entityActions = createEntityActions(schema);
  const customActions = {
    getByUserAndSlug: (username: string, slug: string) => async (dispatch) => {
      dispatch({
        type: GET_SANDBOX_BY_USERNAME_AND_SLUG,
        username,
        slug,
      });
      const url = `users/${username}/sandbox/${slug}`;
      const normalizedResult = await getEntity(url, schema);
      dispatch({
        type: GET_SANDBOX_BY_USERNAME_AND_SLUG_SUCCESS,
        username,
        slug,
        ...normalizedResult,
      });
    },

    renameSandbox: (id: string, title: string) => async (dispatch, getState) => {
      const sandbox = singleSandboxSelector(getState(), { id });

      if (sandbox && sandbox.title !== title) {
        const reverseData = { title: sandbox.title };
        const newData = { title };

        dispatch(entityActions.updateById(id, reverseData, newData));
      }
    },

    createSandbox: (title: string, preset: string = '') => async (dispatch) => {
      try {
        const result = await dispatch(entityActions.create({ title, fork_id: preset || null }));
        return result;
      } catch (e) {
        dispatch(notificationActions.addNotification('There was a problem creating the sandbox', 'Please try again', 'error'));
        return e;
      }
    },
  };
  return { ...entityActions, ...customActions };
};
