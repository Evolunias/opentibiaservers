import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-nilot-login');
}

export default function WithScreenshotsNilotLoginKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-nilot-login" />;
}
