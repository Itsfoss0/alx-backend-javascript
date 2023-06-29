#!/usr/bin/env node

import ClassRoom from './0-classroom';
/*
 * Lets makes some classes shall we
*/

export default function initializeRooms() {
  return [new ClassRoom(19), new ClassRoom(20), new ClassRoom(34)];
}
