import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-archlight-register');
}

export default function WithScreenshotsArchlightRegisterKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-archlight-register" />;
}
