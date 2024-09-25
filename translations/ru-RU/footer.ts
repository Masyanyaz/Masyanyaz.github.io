import type { TranslationsReference } from "";
import type { DataType as Reference } from "";
enum Data {
  supportBanner_mainText = "Test",
  supportBanner_secondaryText = "Hello",
  supportBanner_buttonText = "Contact support",
  appSection_main = `{brand} for {type, select,
    ios {iOS}
    android {Android}
    windows {Windows}
    other {{type}}
  }`,
}
export default Data;
export type DataType = typeof Data;
(({} as DataType) satisfies TranslationsReference<Reference>);