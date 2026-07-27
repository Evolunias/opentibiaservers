import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-dura-online-server');
}

export default function WithTrainersDuraOnlineServerKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-dura-online-server" />;
}
