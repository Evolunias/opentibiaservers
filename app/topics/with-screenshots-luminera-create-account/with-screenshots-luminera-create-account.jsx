import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-luminera-create-account');
}

export default function WithScreenshotsLumineraCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-luminera-create-account" />;
}
