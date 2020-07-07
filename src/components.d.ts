/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AppDonor {
    }
    interface AppHome {
    }
    interface AppProfile {
        "name": string;
    }
    interface AppRoot {
    }
    interface AppSchool {
    }
    interface AppStudent {
    }
    interface AppVoluntary {
    }
}
declare global {
    interface HTMLAppDonorElement extends Components.AppDonor, HTMLStencilElement {
    }
    var HTMLAppDonorElement: {
        prototype: HTMLAppDonorElement;
        new (): HTMLAppDonorElement;
    };
    interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {
    }
    var HTMLAppHomeElement: {
        prototype: HTMLAppHomeElement;
        new (): HTMLAppHomeElement;
    };
    interface HTMLAppProfileElement extends Components.AppProfile, HTMLStencilElement {
    }
    var HTMLAppProfileElement: {
        prototype: HTMLAppProfileElement;
        new (): HTMLAppProfileElement;
    };
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLAppSchoolElement extends Components.AppSchool, HTMLStencilElement {
    }
    var HTMLAppSchoolElement: {
        prototype: HTMLAppSchoolElement;
        new (): HTMLAppSchoolElement;
    };
    interface HTMLAppStudentElement extends Components.AppStudent, HTMLStencilElement {
    }
    var HTMLAppStudentElement: {
        prototype: HTMLAppStudentElement;
        new (): HTMLAppStudentElement;
    };
    interface HTMLAppVoluntaryElement extends Components.AppVoluntary, HTMLStencilElement {
    }
    var HTMLAppVoluntaryElement: {
        prototype: HTMLAppVoluntaryElement;
        new (): HTMLAppVoluntaryElement;
    };
    interface HTMLElementTagNameMap {
        "app-donor": HTMLAppDonorElement;
        "app-home": HTMLAppHomeElement;
        "app-profile": HTMLAppProfileElement;
        "app-root": HTMLAppRootElement;
        "app-school": HTMLAppSchoolElement;
        "app-student": HTMLAppStudentElement;
        "app-voluntary": HTMLAppVoluntaryElement;
    }
}
declare namespace LocalJSX {
    interface AppDonor {
    }
    interface AppHome {
    }
    interface AppProfile {
        "name"?: string;
    }
    interface AppRoot {
    }
    interface AppSchool {
    }
    interface AppStudent {
    }
    interface AppVoluntary {
    }
    interface IntrinsicElements {
        "app-donor": AppDonor;
        "app-home": AppHome;
        "app-profile": AppProfile;
        "app-root": AppRoot;
        "app-school": AppSchool;
        "app-student": AppStudent;
        "app-voluntary": AppVoluntary;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-donor": LocalJSX.AppDonor & JSXBase.HTMLAttributes<HTMLAppDonorElement>;
            "app-home": LocalJSX.AppHome & JSXBase.HTMLAttributes<HTMLAppHomeElement>;
            "app-profile": LocalJSX.AppProfile & JSXBase.HTMLAttributes<HTMLAppProfileElement>;
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "app-school": LocalJSX.AppSchool & JSXBase.HTMLAttributes<HTMLAppSchoolElement>;
            "app-student": LocalJSX.AppStudent & JSXBase.HTMLAttributes<HTMLAppStudentElement>;
            "app-voluntary": LocalJSX.AppVoluntary & JSXBase.HTMLAttributes<HTMLAppVoluntaryElement>;
        }
    }
}
