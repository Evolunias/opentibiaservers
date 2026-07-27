import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-nilot-official');
}

export default function WithScreenshotsNilotOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-nilot-official" />;
}
