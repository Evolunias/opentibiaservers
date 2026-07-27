import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-nostalther-private-server');
}

export default function WithScreenshotsNostaltherPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-nostalther-private-server" />;
}
