import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-yurots-official');
}

export default function WithScreenshotsYurotsOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-yurots-official" />;
}
