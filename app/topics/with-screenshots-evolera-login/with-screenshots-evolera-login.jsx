import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-evolera-login');
}

export default function WithScreenshotsEvoleraLoginKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-evolera-login" />;
}
