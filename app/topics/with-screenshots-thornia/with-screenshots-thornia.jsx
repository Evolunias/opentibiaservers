import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-thornia');
}

export default function WithScreenshotsThorniaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-thornia" />;
}
