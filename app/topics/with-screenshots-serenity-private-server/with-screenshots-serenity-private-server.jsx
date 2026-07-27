import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-serenity-private-server');
}

export default function WithScreenshotsSerenityPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-serenity-private-server" />;
}
