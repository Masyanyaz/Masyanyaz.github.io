import type { TranslationsReference } from "../en-001/footer";
import type { DataType as Reference } from "../en-001/footer";
enum Data {
  supportBanner_mainText = "Test",
  supportBanner_secondaryText = "Hello",
  supportBanner_buttonText = "Contact support",
  test = "This test",
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