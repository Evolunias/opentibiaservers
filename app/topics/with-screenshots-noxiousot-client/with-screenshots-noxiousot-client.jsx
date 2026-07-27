import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-noxiousot-client');
}

export default function WithScreenshotsNoxiousotClientKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-noxiousot-client" />;
}
