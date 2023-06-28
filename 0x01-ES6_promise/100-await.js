#!/usr/bin/env node
import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const uPPromise = await uploadPhoto();
    const uCPromise = await createUser();
    return {
      photo: uPPromise,
      user: uCPromise,
    };
  } catch
  (error) {
    return {
      photo: null,
      user: null,
    };
  }
}
