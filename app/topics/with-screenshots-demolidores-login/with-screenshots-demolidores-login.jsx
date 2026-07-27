import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-demolidores-login');
}

export default function WithScreenshotsDemolidoresLoginKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-demolidores-login" />;
}
