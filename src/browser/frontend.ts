/********************************************************************************
 * Copyright (C) 2020 yewei All rights reserved.
 * SPDX-License-Identifier: MIT
 ********************************************************************************/

import { LogLevel, WebviewOptions } from '@cloudide/core/lib/common/plugin-common';
import { PluginPage, AbstractFrontend } from '@cloudide/core/lib/browser/plugin-api';
import { exposable, expose } from '@cloudide/messaging';

/**
 * Adding your fronted api in this class
 * Using '@expose' to expose your function to backend
 */
@exposable
class Frontend extends AbstractFrontend {

    /**
     * function call to the frontend will wait until init() to be resolved
     */
    async init(): Promise<void> {

    }

    /**
     * Entry of your plugin frontend
     * In this function your can call function exposed by backend
     */
    run(): void {
        let myViewOptions: WebviewOptions = {
            viewType: 'my-webview',
            title: '%plugin.dynamicview.title%',
            targetArea: 'main',
            iconPath: 'resources/icons/plugin.svg',
            viewUrl: 'local:resources/page/dynamic-webview.ejs',
            preserveFocus: true,
            templateEngine: 'ejs'
        };
        this.plugin.createDynamicWebview(myViewOptions, true);
    }

    stop(): void {

    }

}

document.addEventListener('DOMContentLoaded', function() {
    PluginPage.create([Frontend]);
});
