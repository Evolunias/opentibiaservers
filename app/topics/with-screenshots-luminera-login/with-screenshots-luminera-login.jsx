import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-luminera-login');
}

export default function WithScreenshotsLumineraLoginKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-luminera-login" />;
}
