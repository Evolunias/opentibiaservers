import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-nilot');
}

export default function WithScreenshotsNilotKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-nilot" />;
}
