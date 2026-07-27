import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-demolidores');
}

export default function WithScreenshotsDemolidoresKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-demolidores" />;
}
