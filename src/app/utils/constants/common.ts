import { CONSTANTS } from "./constants";

export const TABLE_CONSTANTS = {
  SAMPLE_COLLECTED_DATE: 'SAMPLE_COLLECTED_DATE'
}

export const DYNAMIC_TABLE = {
      DASHBOARD:{
        actionButtonType: 'actions',
        dateKeys: [TABLE_CONSTANTS.SAMPLE_COLLECTED_DATE, 'last_audit_date', 'next_audit_date', 'created_at'],
        removeKeys: ['id', 'field_analysis', 'lab_analysis', 'engg_analysis'],
        orderKeys: [],
        renameHeaderKeys: [],
        actionKeys: [
            {
                buttonType: CONSTANTS.ACTION.VIEW,
                buttonName: '',
                isNavigate: false,
                isModal: true,
                navigateUrl: '',
                roleDeny: [],
                imgPath: 'eye.png',
                addInLastCol: false
            },
        ]
    },
    DASHBOARD2:{
      actionButtonType: 'actions',
      dateKeys: [TABLE_CONSTANTS.SAMPLE_COLLECTED_DATE, 'last_audit_date', 'next_audit_date', 'created_at'],
      removeKeys: ['id', 'audit_frequency'],
      orderKeys: [],
      renameHeaderKeys: [],
      actionKeys: [
      ]
  },
  DASHBOARD3:{
    actionButtonType: 'actions',
    dateKeys: [],
    removeKeys: ['id','field_analysis','lab_analysis','engg_analysis'],
    orderKeys: [],
    renameHeaderKeys: [],
    actionKeys: []
},
DASHBOARD4:{
  actionButtonType: 'actions',
  dateKeys: ['created_at'],
  removeKeys: ['id','password','audit_status'],
  orderKeys: [],
  renameHeaderKeys: [],
  actionKeys: []
},
  ANALYSIS_CONFIG : {
      actionButtonType: 'actions',
      dateKeys: [
        TABLE_CONSTANTS.SAMPLE_COLLECTED_DATE,
        'last_audit_date',
        'next_audit_date',
        'created_at'
      ],
      removeKeys: ['id', 'view', 'engg_analysis','lab_analysis','field_analysis','audit_id'],
      orderKeys: [],
      renameHeaderKeys: [],
      actionKeys: [
        {
          buttonType: CONSTANTS.ACTION.VIEW,
          buttonName: 'View Analysis',
          isNavigate: false,
          isModal: true,
          navigateUrl: '',
          roleDeny: [],
          imgPath: 'eye.png',
          addInLastCol: false,
          dataKey: 'analysis' // Optional key to identify what to show in modal
        }
      ]

    }
  }


    export type FormSection = {
      name: string;
      label: string;
      type: string;
      unit: string;
      value: number;
      valueType: string;
      placeholder: string;
      isRequired: boolean;
      thresholdMin: number | null;
      thresholdMax: number | null;
    };

    export type FormConfig = {
      LEFT: FormSection[];
      RIGHT: FormSection[];
      BOTTOM: FormSection[];
    };

    export type DynamicForm = {
      TRANSFORMER: FormConfig;
      COMPRESSOR: FormConfig;
    };

export const DYNAMIC_FORM = {
  TRANSFORMER:  {
    LT: [
      {
        name: "hydrogen",
        label: "Hydrogen (H₂)",
        type: CONSTANTS.TYPES.NUMBER,
        unit: "ppm",
        value: null,
        valueType: CONSTANTS.TYPES.NUMBER,
        placeholder: "Enter Hydrogen value (ppm)",
        isRequired: true,
        thresholdMin: 0,
        thresholdMax: 150,
      },
      {
        name: "methane",
        label: "Methane (CH₄)",
        type: CONSTANTS.TYPES.NUMBER,
        unit: "ppm",
        value: null,
        valueType: CONSTANTS.TYPES.NUMBER,
        placeholder: "Enter Methane value (ppm)",
        isRequired: true,
        thresholdMin: 0,
        thresholdMax: 60,
      },
      {
        name: "ethylene",
        label: "Ethylene (C₂H₄)",
        type: CONSTANTS.TYPES.NUMBER,
        unit: "ppm",
        value: null,
        valueType: CONSTANTS.TYPES.NUMBER,
        placeholder: "Enter Ethylene value (ppm)",
        isRequired: true,
        thresholdMin: 0,
        thresholdMax: 40,
      },
      {
        name: "ethane",
        label: "Ethane (C₂H₆)",
        type: CONSTANTS.TYPES.NUMBER,
        unit: "ppm",
        value: null,
        valueType: CONSTANTS.TYPES.NUMBER,
        placeholder: "Enter Ethane value (ppm)",
        isRequired: true,
        thresholdMin: 0,
        thresholdMax: 80,
      },
      {
        name: "acetylene",
        label: "Acetylene (C₂H₂)",
        type: CONSTANTS.TYPES.NUMBER,
        unit: "ppm",
        value: null,
        valueType: CONSTANTS.TYPES.NUMBER,
        placeholder: "Enter Acetylene value (ppm)",
        isRequired: true,
        thresholdMin: 0,
        thresholdMax: 5,
      },
      {
        name: "carbonMonoxide",
        label: "Carbon Monoxide (CO)",
        type: CONSTANTS.TYPES.NUMBER,
        unit: "ppm",
        value: null,
        valueType: CONSTANTS.TYPES.NUMBER,
        placeholder: "Enter CO value (ppm)",
        isRequired: true,
        thresholdMin: 0,
        thresholdMax: 500,
      },
      {
        name: "carbonDioxide",
        label: "Carbon Dioxide (CO₂)",
        type: CONSTANTS.TYPES.NUMBER,
        unit: "ppm",
        value: null,
        valueType: CONSTANTS.TYPES.NUMBER,
        placeholder: "Enter CO₂ value (ppm)",
        isRequired: true,
        thresholdMin: 0,
        thresholdMax: 3500,
      },
      {
        name: "oxygen",
        label: "Oxygen (O₂)",
        type: CONSTANTS.TYPES.NUMBER,
        unit: "ppm",
        value: null,
        valueType: CONSTANTS.TYPES.NUMBER,
        placeholder: "Enter Oxygen value (ppm)",
        isRequired: true,
        thresholdMin: 0,
        thresholdMax: 20000,
      },
      {
        name: "nitrogen",
        label: "Nitrogen (N₂)",
        type: CONSTANTS.TYPES.NUMBER,
        unit: "ppm",
        value: null,
        valueType: CONSTANTS.TYPES.NUMBER,
        placeholder: "Enter Nitrogen value (ppm)",
        isRequired: true,
        thresholdMin: 0,
        thresholdMax: 70000,
      },
      {
        name: "tdcg",
        label: "Total Dissolved Combustible Gases (TDCG)",
        type: CONSTANTS.TYPES.NUMBER,
        unit: "ppm",
        value: null,
        valueType: CONSTANTS.TYPES.NUMBER,
        placeholder: "Enter TDCG value (ppm)",
        isRequired: true,
        thresholdMin: 0,
        thresholdMax: 720,
      },
      {
        name: "remarks",
        label: "Remarks",
        type: CONSTANTS.TYPES.SELECT,
        options: [{value :'Normal', label: 'Normal'}, {value:'To be resampled after 3 months to observe rate of rise', label: 'To be resampled after 3 months to observe rate of rise'}],
        value: "",
        valueType: CONSTANTS.TYPES.STRING,
        placeholder: "Enter remarks or observations...",
        isRequired: true
      },
    ],
    FT:[
        {
          name: "insulationResistance",
          label: "Insulation Resistance (IR)",
          type: CONSTANTS.TYPES.NUMBER,
          unit: "MΩ",
          value: null,
          valueType: CONSTANTS.TYPES.NUMBER,
          placeholder: "Enter IR value (MΩ)",
          isRequired: true,
          thresholdMin: 1000,
          thresholdMax: null
        },
        {
          name: "polarizationIndex",
          label: "Polarization Index (PI)",
          type: CONSTANTS.TYPES.NUMBER,
          unit: "ratio",
          value: null,
          valueType: CONSTANTS.TYPES.NUMBER,
          placeholder: "Enter PI value (ratio)",
          isRequired: true,
          thresholdMin: 2.0,
          thresholdMax: null
        },
        {
          name: "windingResistanceHV",
          label: "Winding Resistance (HV)",
          type: CONSTANTS.TYPES.NUMBER,
          unit: "Ω",
          value: null,
          valueType: CONSTANTS.TYPES.NUMBER,
          placeholder: "Enter HV resistance (Ω)",
          isRequired: true,
          thresholdMin: 0.1,
          thresholdMax: 10
        },
        {
          name: "transformerTurnsRatio",
          label: "Transformer Turns Ratio (TTR)",
          type: CONSTANTS.TYPES.NUMBER,
          unit: "ratio",
          value: null,
          valueType: CONSTANTS.TYPES.NUMBER,
          placeholder: "Enter TTR (ratio)",
          isRequired: true,
          thresholdMin: 0.98,
          thresholdMax: 1.02
        },
        {
          name: "bodyTemperature",
          label: "Body Temperature",
          type: CONSTANTS.TYPES.NUMBER,
          unit: "°C",
          value: null,
          valueType: CONSTANTS.TYPES.NUMBER,
          placeholder: "Enter temperature (°C)",
          isRequired: true,
          thresholdMin: 30,
          thresholdMax: 90
        },
        {
          name: "remarks",
          label: "Remarks",
          type: CONSTANTS.TYPES.SELECT,
          value: "",
          options: [{value :'Normal', label: 'Normal'}, {value:'To be resampled after 3 months to observe rate of rise', label: 'To be resampled after 3 months to observe rate of rise'}],
          valueType: CONSTANTS.TYPES.STRING,
          placeholder: "Enter remarks or observations...",
          isRequired: true
        }
      ],
    ET:[{
      name: "isResolved",
      label: "Resolution Status",
      type: CONSTANTS.TYPES.SELECT,
      value: "false",
      valueType: CONSTANTS.TYPES.STRING,
      options: [
        { value: "true", label: "Resolved" },
        { value: "false", label: "Unresolved" }
      ],
      placeholder: "Select resolution status",
      isRequired: true
    },
    {
      name: "healthStatus",
      label: "Health Status",
      type: CONSTANTS.TYPES.SELECT,
      value: "false",
      valueType: CONSTANTS.TYPES.STRING,
      options: [
        { value: 1, label: "Very Poor" },
        { value: 2, label: "Poor" },
        { value: 3, label: "Warning Range" },
        { value: 4, label: "Good" },
        { value: 5, label: "Excellent" },
      ],
      placeholder: "Select resolution status",
      isRequired: true
    },
      {
      name: "remarks",
      label: "Corrective Measures",
      type: CONSTANTS.TYPES.TEXTAREA,
      value: "",
      valueType: CONSTANTS.TYPES.STRING,
      placeholder: "Enter remarks or observations...",
      isRequired: true
    }
  ],
    BOTTOM:[
      {
        name: CONSTANTS.ACTION.CANCEL_POPUP,
        type: "button",
        value: "Cancel",
        style: {
        "background-color": "#f8d7da", /* Light red */
        "color": "#721c24",
        "margin-right": "14px",
        },
    },
    {
        name: CONSTANTS.ACTION.PROCEED,
        type: "button",
        value: "Proceed",
        style: {
          "background-color": "#d4edda", /* Light green */
          "color": "#155724",
        },
    },
      ]
    },

  COMPRESSOR: {
    FT: [{
      name: "dischargePressure",
      label: "Discharge Pressure",
      type: CONSTANTS.TYPES.NUMBER,
      unit: "bar",
      value: null,
      valueType: CONSTANTS.TYPES.NUMBER,
      placeholder: "Enter discharge pressure (bar)",
      isRequired: true,
      thresholdMin: 5,
      thresholdMax: 20
    },
    {
      name: "suctionPressure",
      label: "Suction Pressure",
      type: CONSTANTS.TYPES.NUMBER,
      unit: "bar",
      value: null,
      valueType: CONSTANTS.TYPES.NUMBER,
      placeholder: "Enter suction pressure (bar)",
      isRequired: true,
      thresholdMin: 1,
      thresholdMax: 10
    },
    {
      name: "dischargeTemperature",
      label: "Discharge Temperature",
      type: CONSTANTS.TYPES.NUMBER,
      unit: "°C",
      value: null,
      valueType: CONSTANTS.TYPES.NUMBER,
      placeholder: "Enter discharge temperature (°C)",
      isRequired: true,
      thresholdMin: 60,
      thresholdMax: 120
    },
    {
      name: "vibrationLevel",
      label: "Vibration Level",
      type: CONSTANTS.TYPES.NUMBER,
      unit: "mm/s",
      value: null,
      valueType: CONSTANTS.TYPES.NUMBER,
      placeholder: "Enter vibration level (mm/s)",
      isRequired: true,
      thresholdMin: 0,
      thresholdMax: 4.5
    },
    {
      name: "oilTemperature",
      label: "Oil Temperature",
      type: CONSTANTS.TYPES.NUMBER,
      unit: "°C",
      value: null,
      valueType: CONSTANTS.TYPES.NUMBER,
      placeholder: "Enter oil temperature (°C)",
      isRequired: true,
      thresholdMin: 40,
      thresholdMax: 90
    },
    {
      name: "oilPressure",
      label: "Oil Pressure",
      type: CONSTANTS.TYPES.NUMBER,
      unit: "bar",
      value: null,
      valueType: CONSTANTS.TYPES.NUMBER,
      placeholder: "Enter oil pressure (bar)",
      isRequired: true,
      thresholdMin: 2,
      thresholdMax: 6
    },
    {
      name: "bearingTemperature",
      label: "Bearing Temperature",
      type: CONSTANTS.TYPES.NUMBER,
      unit: "°C",
      value: null,
      valueType: CONSTANTS.TYPES.NUMBER,
      placeholder: "Enter bearing temperature (°C)",
      isRequired: true,
      thresholdMin: 30,
      thresholdMax: 85
    },
    {
      name: "remarks",
      label: "Remarks",
      type: CONSTANTS.TYPES.TEXTAREA,
      value: "",
      valueType: CONSTANTS.TYPES.STRING,
      placeholder: "Enter remarks or observations...",
    },
  ],
  ET:[{
    name: "isResolved",
    label: "Resolution Status",
    type: CONSTANTS.TYPES.SELECT,
    value: "false",
    valueType: CONSTANTS.TYPES.STRING,
    options: [
      { value: "true", label: "Resolved" },
      { value: "false", label: "Unresolved" }
    ],
    placeholder: "Select resolution status",
    isRequired: true
  },
    {
    name: "remarks",
    label: "Corrective Measures",
    type: CONSTANTS.TYPES.TEXTAREA,
    value: "",
    valueType: CONSTANTS.TYPES.STRING,
    placeholder: "Enter remarks or observations...",
    isRequired: true
  }
],
  BOTTOM:[
    {
      name: CONSTANTS.ACTION.CANCEL_POPUP,
      type: "button",
      value: "Cancel",
      style: {
      "background-color": "#f8d7da", /* Light red */
      "color": "#721c24",
      "margin-right": "14px",
      },
  },
  {
      name: CONSTANTS.ACTION.PROCEED,
      type: "button",
      value: "Proceed",
      style: {
        "background-color": "#d4edda", /* Light green */
        "color": "#155724",
      },
  },
]
  }
}