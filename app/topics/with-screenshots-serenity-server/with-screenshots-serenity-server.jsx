import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-serenity-server');
}

export default function WithScreenshotsSerenityServerKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-serenity-server" />;
}
