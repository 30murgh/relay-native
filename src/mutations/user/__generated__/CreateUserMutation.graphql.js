/**
 * @flow
 * @relayHash 5202cee55f128b32b8599e5facac4552
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type CreateUserMutationVariables = {|
  createUserInput: {
    phoneNumber: string;
  };
|};
export type CreateUserMutationResponse = {|
  +createUser: ?{|
    +user: ?{|
      +otpExpireDate: ?any;
    |};
  |};
|};
*/


/*
mutation CreateUserMutation(
  $createUserInput: CreateUserInput!
) {
  createUser(userData: $createUserInput) {
    user {
      otpExpireDate
      id
    }
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "createUserInput",
        "type": "CreateUserInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "CreateUserMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "userData",
            "variableName": "createUserInput",
            "type": "CreateUserInput!"
          }
        ],
        "concreteType": "CreateUserMutation",
        "name": "createUser",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "JoinUserNode",
            "name": "user",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "otpExpireDate",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutations"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "CreateUserMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "createUserInput",
        "type": "CreateUserInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "CreateUserMutation",
    "operation": "mutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "userData",
            "variableName": "createUserInput",
            "type": "CreateUserInput!"
          }
        ],
        "concreteType": "CreateUserMutation",
        "name": "createUser",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "JoinUserNode",
            "name": "user",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "otpExpireDate",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "id",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "mutation CreateUserMutation(\n  $createUserInput: CreateUserInput!\n) {\n  createUser(userData: $createUserInput) {\n    user {\n      otpExpireDate\n      id\n    }\n  }\n}\n"
};

module.exports = batch;
