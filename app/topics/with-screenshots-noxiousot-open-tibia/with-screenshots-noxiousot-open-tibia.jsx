import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-noxiousot-open-tibia');
}

export default function WithScreenshotsNoxiousotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-noxiousot-open-tibia" />;
}
