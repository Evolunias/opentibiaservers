import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-evolera-server');
}

export default function WithScreenshotsEvoleraServerKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-evolera-server" />;
}
