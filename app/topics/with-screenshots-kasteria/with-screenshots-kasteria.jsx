import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-kasteria');
}

export default function WithScreenshotsKasteriaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-kasteria" />;
}
