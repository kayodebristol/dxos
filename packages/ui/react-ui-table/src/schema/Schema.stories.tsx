//
// Copyright 2024 DXOS.org
//

import '@dxos-theme';

import { Arbitrary } from '@effect/schema';
import * as fc from 'fast-check';
import React from 'react';

import { S } from '@dxos/echo-schema';
import { withTheme, withLayout } from '@dxos/storybook-utils';

import { schemaToColumnDefs } from './column-utils';
import { Table } from '../components';

export default {
  title: 'react-ui-table/Schema',
  decorators: [withTheme, withLayout()],
};

const exampleSchema = S.Struct({
  field1: S.String,
  field2: S.Number,
  field3: S.Date,
  field4: S.optional(S.String.pipe(S.length(10))),
  field5: S.optional(
    S.Struct({
      innerField1: S.String,
      innerField2: S.Number,
    }),
  ),
});

type ExampleSchema = S.Schema.Type<typeof exampleSchema>;

const columns = schemaToColumnDefs(exampleSchema);

const exampleSchemaArbitrary = Arbitrary.make(exampleSchema);

const items = fc.sample(exampleSchemaArbitrary, 10);

export const Default = {
  render: () => {
    return (
      <Table.Root>
        <Table.Viewport classNames='fixed inset-0'>
          <Table.Main<ExampleSchema>
            role='grid'
            rowsSelectable='multi'
            keyAccessor={(row) => JSON.stringify(row)}
            columns={columns}
            data={items}
            fullWidth
            stickyHeader
            border
          />
        </Table.Viewport>
      </Table.Root>
    );
  },
};
