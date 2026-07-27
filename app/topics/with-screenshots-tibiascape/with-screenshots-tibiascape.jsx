import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibiascape');
}

export default function WithScreenshotsTibiascapeKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibiascape" />;
}
