export const CONSTANTS = {
  ALL_ACTION_OPTIONS: ['edit',  'action', 'view', 'menu', 'clone', 'delete'],
  ACTION: {
    RESET: 'reset',
    APPLY: 'apply',
    EDIT: 'edit',
    VIEW: 'view',
    CLONE: 'clone',
    ACTIONS: 'actions',
    CANCEL_POPUP: 'cancel_popup',
    PROCEED: 'proceed',
    BUTTON: 'button',
    SUBMIT: 'submit',
    CANCEL: 'cancel',
    CLOSE: 'close',
    UPDATE: 'update',
    CREATE: 'create',
    SAVE: 'save',
    SELECT_BOXES: 'Select Boxes',
    SELECT_ALL_BOXES: 'Select All Boxes',
    ADD: 'add',
    SUBTRACT: 'subtract',
    MENU: 'menu',
    SEARCH: 'search',
    DELETE: 'delete',
    DOWNLOAD: 'download',
    UPLOAD: 'upload',
    BUTTON_FIELD: 'button-field',
    ICON_BUTTON: 'icon-button',
    BUTTON_WITH_ICON: 'button-with-icon',
    REFRESH: 'refresh'
},
  TYPES: {
    TEXTAREA: 'textarea',
    TEXT: 'text',
    NUMBER: 'number',
    BOOLEAN: 'boolean',
    ARRAY: 'array',
    DROPDOWN: 'dropdown',
    OBJECT: 'object',
    STRING: 'string',
    DATE: 'date',
    RADIO: 'radio',
    TABLE: 'table',
    MULTI_SELECT_LISTING: 'multiSelectListing',
    SLABS: 'slabs',
    UPLOAD: 'upload',
    FILE: 'file',
    MULTI_SELECT_BOXES: 'multiSelectBoxes',
    CUSTOM_SELECT_POPUP: 'custom-select-popup',
    CHECKBOX: 'checkbox',
    SELECT:'select'
}
}

export const configButtons = {
  CANCEL_POPUP: {
      name: CONSTANTS.ACTION.CANCEL_POPUP,
      type: CONSTANTS.ACTION.BUTTON,
      value: CONSTANTS.ACTION.CANCEL,
      style: {
          "background-color": "#EBEBEB",
          "color": "#323232"
      },
  },
  PROCEED: {
      name: CONSTANTS.ACTION.PROCEED,
      type: CONSTANTS.ACTION.SUBMIT,
      value: CONSTANTS.ACTION.UPDATE,
      style: {
          "background-color": "#F57C00",
          color: "white",
      },
  },
  SUBMIT: {
      name: CONSTANTS.ACTION.SUBMIT,
      type: CONSTANTS.ACTION.SUBMIT,
      value: CONSTANTS.ACTION.SUBMIT,
      style: {
          "background-color": "#F57C00",
          color: "white",
      },
  }

}