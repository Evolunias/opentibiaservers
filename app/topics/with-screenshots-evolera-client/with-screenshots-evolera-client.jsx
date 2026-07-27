import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-evolera-client');
}

export default function WithScreenshotsEvoleraClientKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-evolera-client" />;
}
