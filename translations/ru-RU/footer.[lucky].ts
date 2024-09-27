import type { TranslationsReference } from "@frontend/utils/i18n";
import type { DataType as Reference } from "../en-001/footer";
enum Data {
  supportBanner_mainText = "Хорошо",
  supportBanner_secondaryText = "Приветике",
  supportBanner_buttonText = "Contact support",
  test = "Это тест",
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