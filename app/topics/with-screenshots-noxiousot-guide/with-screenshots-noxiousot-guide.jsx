import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-noxiousot-guide');
}

export default function WithScreenshotsNoxiousotGuideKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-noxiousot-guide" />;
}
