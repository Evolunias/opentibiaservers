import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-noxiousot-server');
}

export default function WithScreenshotsNoxiousotServerKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-noxiousot-server" />;
}
