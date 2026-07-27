import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibiara-login');
}

export default function WithScreenshotsTibiaraLoginKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibiara-login" />;
}
