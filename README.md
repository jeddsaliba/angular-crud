# Angular CRUD

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.12.

The purpose of this project is to showcase an Angular Project with basic CRUD functionalities.

## Table of Contents
[Dependencies](#dependencies)<br/>
[Plugin(s) Used](#plugins-used)<br/>
[Installation](#installation)<br/>
[Development Server](#development-server)<br/>
[Support](#support)

<a name="installation"></a>
## Dependencies
To install the Backend (API), click [here](https://github.com/jeddsaliba/laravel-crud).

<a name="plugins-used"></a>
## Plugin(s) Used
- [Angular Material](https://material.angular.io)
- [NGRX](https://ngrx.io)
- [Bootstrap](https://getbootstrap.com)
- [Hashids](https://www.npmjs.com/package/hashids)
  - For Hashids, you can modify the following in your `environment.ts` and `environment.prod.ts`:
    ```bash
    hashKeys: {
        salt: 'HASH_ID_SALT',
        minLength: 12,
        alphabet: 'HASH_ID_ALPHABET',
    }
    ```
- [ng2-charts](https://www.npmjs.com/package/ng2-charts)
- [ngx-quill](https://www.npmjs.com/package/ngx-quill)
- [xng-breadcrumb](https://www.npmjs.com/package/xng-breadcrumb)

<a name="installation"></a>
## Installation
Install the `node_modules` using `npm`:

```bash
npm install
```

<a name="development-server"></a>
## Development Server
Run this command:

```bash
ng serve --live-reload false
```

After successfully running the development server, navigate to:

```bash
http://localhost:4200/
```

<a name="support"></a>
## Support
For support, email jeddsaliba@gmail.com.
