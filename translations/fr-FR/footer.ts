// @crowdin:ignore
import type { TranslationsReference } from "../en-001/footer";
// @crowdin:ignore
import type { DataType as Reference } from "../en-001/footer";
enum Data {
  supportBanner_mainText = "Test fr",
  supportBanner_secondaryText = "Hello fr",
  supportBanner_buttonText = "Support fr",
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