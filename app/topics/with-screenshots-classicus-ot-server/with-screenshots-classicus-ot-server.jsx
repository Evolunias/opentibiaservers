import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-classicus-ot-server');
}

export default function WithScreenshotsClassicusOtServerKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-classicus-ot-server" />;
}
