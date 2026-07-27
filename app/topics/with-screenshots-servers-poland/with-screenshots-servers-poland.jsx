import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-servers-poland');
}

export default function WithScreenshotsServersPolandKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-servers-poland" />;
}
