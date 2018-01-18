/**
 * @flow
 * @relayHash 6d480b2e016be7c8b498114d3bebf569
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type LoginUserMutationVariables = {|
  loginUserInput: {
    phoneNumber: string;
    otp: string;
  };
|};
export type LoginUserMutationResponse = {|
  +loginUser: ?{|
    +token: ?string;
  |};
|};
*/


/*
mutation LoginUserMutation(
  $loginUserInput: LoginUserInput!
) {
  loginUser(userData: $loginUserInput) {
    token
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "loginUserInput",
        "type": "LoginUserInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "LoginUserMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "userData",
            "variableName": "loginUserInput",
            "type": "LoginUserInput!"
          }
        ],
        "concreteType": "LoginUserMutation",
        "name": "loginUser",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "token",
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
  "name": "LoginUserMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "loginUserInput",
        "type": "LoginUserInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "LoginUserMutation",
    "operation": "mutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "userData",
            "variableName": "loginUserInput",
            "type": "LoginUserInput!"
          }
        ],
        "concreteType": "LoginUserMutation",
        "name": "loginUser",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "token",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "mutation LoginUserMutation(\n  $loginUserInput: LoginUserInput!\n) {\n  loginUser(userData: $loginUserInput) {\n    token\n  }\n}\n"
};

module.exports = batch;
