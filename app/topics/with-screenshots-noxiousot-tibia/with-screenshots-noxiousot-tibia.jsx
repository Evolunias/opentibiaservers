import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-noxiousot-tibia');
}

export default function WithScreenshotsNoxiousotTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-noxiousot-tibia" />;
}
