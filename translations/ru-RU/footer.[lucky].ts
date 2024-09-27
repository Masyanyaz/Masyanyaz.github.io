import type { TranslationsReference } from "../en-001/footer";
import type { DataType as Reference } from "../en-001/footer";
enum Data {
  supportBanner_mainText = "Хорошо",
  supportBanner_secondaryText = "Приветике",
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