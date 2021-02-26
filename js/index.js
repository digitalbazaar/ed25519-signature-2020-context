/*!
 * Copyright (c) 2021 Digital Bazaar, Inc. All rights reserved.
 */
'use strict';

const context = require('../contexts/ed25519-signature-2020-v1.jsonld');
const constants = require('./constants');
const {documentLoader} = require('./documentLoader');
const {EXAMPLE_CONTEXT_URL, EXAMPLE_CBORLD_VALUE} = constants;

const contexts = new Map();
contexts.set(constants.EXAMPLE_CONTEXT_URL, context);

const appContextMap = new Map();
appContextMap.set(EXAMPLE_CONTEXT_URL, EXAMPLE_CBORLD_VALUE);

module.exports = {
  constants,
  contexts,
  appContextMap,
  documentLoader
};
