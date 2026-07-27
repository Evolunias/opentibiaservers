import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-eldera-login');
}

export default function WithScreenshotsElderaLoginKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-eldera-login" />;
}
