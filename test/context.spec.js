/*!
 * Copyright (c) 2021 Digital Bazaar, Inc. All rights reserved.
 */
const chai = require('chai');
chai.use(require('dirty-chai'));
chai.should();
const {expect} = chai;

const {
  contexts, constants, appContextMap, CONTEXT_URL, CONTEXT, documentLoader
} = require('..');

describe('Example Context', () => {
  it('constants', async () => {
    expect(constants).to.exist();
    expect(constants).to.have.property('CBORLD_CODEC_VALUE');
    expect(CONTEXT_URL).to.exist;
    expect(CONTEXT).to.exist;
  });

  it('contexts', async () => {
    expect(contexts.get(CONTEXT_URL)).to.have.property('@context');
  });

  it('appContextMap', async () => {
    expect(appContextMap.get(CONTEXT_URL)).to.exist();
  });

  it('documentLoader', async () => {
    const {document} = await documentLoader(CONTEXT_URL);
    expect(document).to.have.property('@context');
  });
});
