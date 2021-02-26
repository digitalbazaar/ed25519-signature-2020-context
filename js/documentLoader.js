/*!
 * Copyright (c) 2021 Digital Bazaar, Inc. All rights reserved.
 */
'use strict';

const {ED25519_SIGNATURE_CONTEXT_URL} = require('./constants');
const context = require('../contexts/ed25519-signature-2020-v1.jsonld');

module.exports = {
  documentLoader(url) {
    if(url !== ED25519_SIGNATURE_CONTEXT_URL) {
      throw new Error(`Loading document "${url}" is not allowed.`);
    }

    return {
      contextUrl: null,
      document: context,
      documentUrl: url
    };
  }
};
