import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-server-poland');
}

export default function WithScreenshotsServerPolandKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-server-poland" />;
}
