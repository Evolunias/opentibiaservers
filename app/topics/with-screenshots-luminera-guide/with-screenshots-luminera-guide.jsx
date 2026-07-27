import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-luminera-guide');
}

export default function WithScreenshotsLumineraGuideKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-luminera-guide" />;
}
