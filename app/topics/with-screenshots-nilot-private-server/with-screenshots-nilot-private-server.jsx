import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-nilot-private-server');
}

export default function WithScreenshotsNilotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-nilot-private-server" />;
}
