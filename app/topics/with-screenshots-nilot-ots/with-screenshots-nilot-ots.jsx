import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-nilot-ots');
}

export default function WithScreenshotsNilotOtsKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-nilot-ots" />;
}
