import {initializeBlock} from '@airtable/blocks/ui';
import React from 'react';
import { DatePicker } from 'antd';

function HelloWorldBlock() {
    return <DatePicker />;
}

initializeBlock(() => <HelloWorldBlock />);
